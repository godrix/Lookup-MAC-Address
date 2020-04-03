const fetch = require('node-fetch');

const knex = require('../../database');

class MacVendorController {
  async index(req, res) {
    const { mac } = req.params;

    const macNumber = mac
      .toUpperCase()
      .replace(/[^0-9a-fA-F]/g, '')
      .substring(0, 6);

    if (macNumber < 6) {
      return res.status(401).json({
        error: 'The mac address is not in a valid format',
      });
    }

    const vendor = await knex('mac_vendor')
      .select(['mac_vendor.mac', 'mac_vendor.vendor'])
      .where('mac', macNumber)
      .first();

    if (!vendor) {
      let newVendor;

      await fetch(`https://api.macvendors.com/${macNumber}`)
        .then(res => res.text())
        .then(body => {
          if (body.length === 33) {
            return res.json({
              error: 'The search term did not return any results',
            });
          }

          newVendor = body;
        });

      await knex('mac_vendor').insert({
        id: macNumber,
        mac: macNumber,
        vendor: newVendor,
      });

      return res.json({ mac: macNumber, vendor: newVendor });
    }

    return res.json(vendor);
  }
}

module.exports = new MacVendorController();

const crypto = require('crypto');
const fetch = require('node-fetch');

const knex = require('../../database');

class MacVendorController {
  async index(req, res) {
    const { mac } = req.params;

    const macNumber = mac
      .toString()
      .replace(/[^0-9a-fA-F]/g, '')
      .toUpperCase()
      .substring(0, 6);

    if (macNumber.length < 6) {
      return res.status(401).json({
        error: 'The mac address is not valid format',
      });
    }

    const vendor = await knex('mac_vendor')
      .select(['mac_vendor.mac', 'mac_vendor.vendor'])
      .where('mac', macNumber)
      .first();

    if (!vendor) {
      const response = await fetch(`https://api.macvendors.com/${mac}`);
      const data = await response.text();

      if (data.length === 33) {
        return res.json({
          error: 'The search term did not return any results',
        });
      }

      await knex('mac_vendor').insert({
        id: crypto.randomBytes(4).toString('HEX'),
        mac: macNumber,
        vendor: data,
      }).ifN;

      return res.json({ mac: macNumber, vendor: data });
    }

    return res.json(vendor);
  }
}

module.exports = new MacVendorController();

import knex from '~/database';

class MacVendorController {
  async index(req, res) {
    const { mac } = req.params;

    const vendor = await knex('mac_vendor').select(['mac_vendor.mac', 'mac_vendor.vendor']).where('mac', mac).first()
    return res.json(vendor);
  }
}

export default new MacVendorController();
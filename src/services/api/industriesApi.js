import industriesData from "@/services/mockData/industries.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const industriesApi = {
  async getAll() {
    await delay(300);
    return [...industriesData];
  },

  async getById(id) {
    await delay(200);
    const industry = industriesData.find(item => item.Id === parseInt(id));
    if (!industry) {
      throw new Error("Industry not found");
    }
    return { ...industry };
  },

  async create(industryData) {
    await delay(400);
    const maxId = Math.max(...industriesData.map(item => item.Id), 0);
    const newIndustry = {
      Id: maxId + 1,
      ...industryData
    };
    industriesData.push(newIndustry);
    return { ...newIndustry };
  },

  async update(id, updateData) {
    await delay(350);
    const index = industriesData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Industry not found");
    }
    industriesData[index] = { ...industriesData[index], ...updateData };
    return { ...industriesData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = industriesData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Industry not found");
    }
    const deleted = industriesData.splice(index, 1)[0];
    return { ...deleted };
  }
};
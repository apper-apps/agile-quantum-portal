import teamData from "@/services/mockData/team.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const teamApi = {
  async getAll() {
    await delay(300);
    return [...teamData];
  },

  async getById(id) {
    await delay(200);
    const member = teamData.find(item => item.Id === parseInt(id));
    if (!member) {
      throw new Error("Team member not found");
    }
    return { ...member };
  },

  async create(memberData) {
    await delay(400);
    const maxId = Math.max(...teamData.map(item => item.Id), 0);
    const newMember = {
      Id: maxId + 1,
      ...memberData
    };
    teamData.push(newMember);
    return { ...newMember };
  },

  async update(id, updateData) {
    await delay(350);
    const index = teamData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Team member not found");
    }
    teamData[index] = { ...teamData[index], ...updateData };
    return { ...teamData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = teamData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Team member not found");
    }
    const deleted = teamData.splice(index, 1)[0];
    return { ...deleted };
  }
};
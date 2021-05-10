const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'Skills';
const TABLE_COLUMNS = ['skill_id', 'skill_name', 'skill_rate'];
const TABLE_ID = 'skill_id';

const Skill = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);
console.log('antes...', Skill);
Skill.findOneByIdWithUser = (idSkill) => {
    return knex
        .select()
        .from(TABLE)
        .join('Users-Skills', 'Skill.skill_id', '=', 'Users-Skills.skill_id')
        .where({
            [TABLE_ID]: idSkill
        })
}
console.log("despues...", Skill)

module.exports = Skill
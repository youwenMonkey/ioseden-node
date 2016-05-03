/**
 * Created by daniel on 16/5/2.
 */
var sequelize = require('./index');
var Sequelize = sequelize.Sequelize;
var User = require('./User');
var Tag = require('./Tag');

var UserTagType = {
    TYPE_DEFAULT: 1
};

var UserTag = sequelize.define("user_tag", {
    type: {
        type:Sequelize.INTEGER(8),
        defaultValue: UserTagType.TYPE_DEFAULT
    },
    createTime: {
        type: Sequelize.DATE,
        field: 'create_time',
        defaultValue: Sequelize.NOW()
    }
}, {
    freezeTableName: true,
    timestamps: false,
});

UserTag.TYPE_DEFAULT = UserTagType.TYPE_DEFAULT

UserTag.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

User.hasMany(UserTag, {
    foreignKey: 'user_id',
    as: 'userTags'
});

UserTag.belongsTo(Tag, {
    foreignKey: 'tag_id',
    as: 'tag'
});

Tag.hasMany(UserTag, {
    foreignKey: 'tag_id',
    as: 'userTags'
});


User.belongsToMany(Tag, {
    through: {
        model: UserTag,
        unique: false
    },
    foreignKey: 'user_id',
    as: 'tags'
});

Tag.belongsToMany(User, {
    through: {
        model: UserTag,
        unique: false
    },
    foreignKey: 'tag_id',
    as: 'users'
});


module.exports = UserTag;
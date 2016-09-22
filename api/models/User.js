/**
 * User.js
 *
 * @description :: User model
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    schema: true,

    login: {
      type: 'string',
      required: true,
      unique: true
    },

    email: {
      type: 'string',
      required: true,
      email: true,
      unique: true
    },

    encryptedPassword: {
      type: 'string'
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encriptedPassword;
      delete obj._csrf;
      return obj;
    }

  }
};

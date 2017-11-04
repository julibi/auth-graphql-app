const graphql = require('graphql'); 
const { 
  GraphQLObjectType,
  GraphQLString
 } = graphql;

const UserType = require('./types/user_type');
//all the backend login/ signup logic is in here
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        //letting User confirm the password by typing it in twice 
        //happens entirely on the frontend of our application
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    }
  }

});

module.export = mutation;
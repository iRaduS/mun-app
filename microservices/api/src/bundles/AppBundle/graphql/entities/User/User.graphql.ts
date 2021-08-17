export default /* GraphQL */ `
  type User {
    _id: ObjectId!
    profile: UserProfile!
    isEnabled: Boolean!
    createdAt: Date!
  }

  type UserProfile {
    firstName: String!
    lastName: String!
  }
`;

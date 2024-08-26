const userSchema = {
    last_name: {
      type: String,
      required: false,
      default: null,
    },
    first_name: {
      type: String,
      required: false,
      default: null,
    },
    username: {
      type: String,
      required: false,
      default: null,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Artist', 'User'],
      required: false,
      default: ROLES[1],
    },
  
    orders: [
      {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "orders",
      },
    ],
    
    favourites: [
      {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "products",
      },
    ],
  };
  const User = BaseSchema('users', {userSchema });
  
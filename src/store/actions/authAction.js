import axios from "axios";

export const userRegister = (data) => {
  return async (dispatch) => {
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `/api/messenger/user-register`,
        data,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };
};

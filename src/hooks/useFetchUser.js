import axios from "axios";
import { useState } from "react";

// ユーザ一覧を取得するカスタムフック
export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const onClickFetchUser = () => {
    setIsErr(false);
    setIsLoading(true);

    // API実行
    axios
      .get("https:// example.com/users")
      .then((result) => {
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.lastName} ${user.firstName}`,
          age: user.age,
        }));
        setUserList(users);
      })
      .catch(() => setIsErr(true))
      .finally(() => setIsLoading(false));
  };

  return { userList, isLoading, isErr, onClickFetchUser };
};

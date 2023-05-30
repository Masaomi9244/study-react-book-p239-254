import { useFetchUsers } from "./hooks/useFetchUser";

export const App = () => {
  const { userList, isLoading, isErr, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザ取得</button>
      {isErr && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map((user) => <p key={user.id}></p>)
      )}
    </div>
  );
};

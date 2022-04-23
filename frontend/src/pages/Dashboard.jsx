import ListItem from "../components/ListItem";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin's List</h1>
      <div className="form">
        <form>
          <input type="text" placeholder="write something..." />
          <button type="submit" className="btn-list">
            Add to the list
          </button>
        </form>
      </div>
      <div className="list">
        <ListItem />
      </div>
    </div>
  );
};

export default Dashboard;

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        </td>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </tr>
  );
};

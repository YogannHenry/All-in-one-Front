

interface CounterProps {
  nbTasksNotDone: number;
}

function Counter({ nbTasksNotDone }: CounterProps) {
  function getText(nb: number): string {
    switch (nb) {
      case 0:
        return 'Aucune tâche en cours';
      case 1:
        return '1 tâche en cours';
      default:
        return `${nb} tâches en cours`;
    }
  }

  return <p className="counter">{getText(nbTasksNotDone)}</p>;
}

export default Counter;

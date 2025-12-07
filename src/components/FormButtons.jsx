import { Button } from 'react-bootstrap';
import { LuDices, LuListRestart } from 'react-icons/lu';

const FormButtons = ({ isRandomizing, reset }) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      <Button
        variant="primary"
        type="submit"
        form="randomForm"
        className="d-flex gap-2 flex-fill justify-content-center text-nowrap"
        disabled={isRandomizing}
      >
        <LuDices size={22} />
        Go Randomize
      </Button>
      <Button
        variant="secondary"
        className="d-flex gap-2 flex-fill justify-content-center text-nowrap"
        disabled={isRandomizing}
        onClick={reset}
      >
        <LuListRestart size={22} />
        Reset Form
      </Button>
    </div>
  );
};

export default FormButtons;

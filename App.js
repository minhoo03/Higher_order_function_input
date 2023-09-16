import logo from './logo.svg';
import './App.css';
import { isEven, isOdd, minLength, isFileSizeError_1mb } from './validChecks/index'
import useInputFile from './hooks/useInputValid'

function App() {

  const [evenValue, setEvenValue, evenValidator] = useInputFile('', [isEven], 'even err')
  const [oddValue, setOddValue, oddValidator] = useInputFile('', [isOdd], 'odd err')
  const [pNum, setPNum, PValidator] = useInputFile('', [isOdd, minLength], 'odd & min 11')
  const [t_file, setFile, fileValidator] = useInputFile('', [isFileSizeError_1mb], '1mb 보다 작은 것만 허용')

  return (
    <div className="App">
      <header className="App-header">
        <p>e Test: <input onChange={(e) => setEvenValue(e.target.value)} value={evenValue} /></p>
        <p>{evenValidator?.error}</p>
        {/* evenValidator?.succeed */}
        <p>o Test: <input onChange={(e) => setOddValue(e.target.value)} value={oddValue} /></p>
        <p>{oddValidator?.error}</p>
        <p>o&p Test: <input onChange={(e) => setPNum(e.target.value)} value={pNum} /></p>
        <p>{PValidator?.error}</p>

        {/* <input type={"file"} onChange={(e) => setFile(e)} value={file} /> */}
        <input 
            type='file' 
            src={t_file}
            onChange={setFile}
            />
        <p>{fileValidator?.error}</p>

        {
          fileValidator?.succeed && <button>테스트 제출</button>
        }
      </header>
    </div>
  );
}

export default App;
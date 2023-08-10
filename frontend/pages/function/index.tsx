import { Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { AppLink } from 'src/components';

/**
 * Renders Function Application page
 * @page FunctionPage
 */
const FunctionPage: NextPage = () => {
  const [output1, setOutput1] = useState('');
  const [output2, setOutput2] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const transformArray = (arr: number[]) => {
    let transformedArr = arr.slice(); // create a copy of the input array to avoid mutation
    while (!transformedArr.every((element: number) => element === 1)) {
      for (let i = 0; i < transformedArr.length; i++) {
        if (transformedArr[i] == 1) {
          continue;
        } else if (transformedArr[i] % 2 === 0) {
          transformedArr[i] = transformedArr[i] / 2;
        } else {
          transformedArr[i] = transformedArr[i] * 3 + 1;
        }
      }
    }
    return transformedArr;
  };

  const checkPermutation = (string1: string, string2: string) => {
    // Check if the lengths of the strings are different
    if (string1.length !== string2.length) {
      return false;
    }

    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    // Compare the sorted strings
    return sortedString1 === sortedString2;
  };

  const clickRunFirstFunction = () => {
    try {
      const arrInput = input1.split(',').map(Number);
      console.log(typeof arrInput);
      console.log(arrInput);
      if (arrInput.length > 0) {
        const result = transformArray(arrInput);
        setOutput1(result.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickRunSecondFunction = () => {
    try {
      const result = checkPermutation(input2, input3);
      setOutput2(result.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeInput1 = (e: any) => {
    setInput1(e.target.value);
  };

  const onChangeInput2 = (e: any) => {
    setInput2(e.target.value);
  };

  const onChangeInput3 = (e: any) => {
    setInput3(e.target.value);
  };
  return (
    <Stack spacing={2} padding={2}>
      <Stack>
        <Typography variant="h3">Functions:</Typography>
        <div style={{ display: 'flex', width: '100%' }}>
          <textarea style={{ width: '50%', height: '300px' }}>{`const transformArray = (arr: number[]) => {
    let transformedArr = arr.slice();
    while (!transformedArr.every((element: number) => element === 1)) {
      for (let i = 0; i < transformedArr.length; i++) {
        if (transformedArr[i] == 1) {
          continue;
        } else if (transformedArr[i] % 2 === 0) {
          transformedArr[i] = transformedArr[i] / 2;
        } else {
          transformedArr[i] = transformedArr[i] * 3 + 1;
        }
      }
    }
    return transformedArr;
  };`}</textarea>
          <div style={{ marginLeft: '20px' }}>
            <h4>Input: (Use integer array)</h4>
            <input type="text" placeholder="10,7,8,2,1" onChange={onChangeInput1} />
            <br />
            <br />
            <button type="button" onClick={clickRunFirstFunction}>
              Run
            </button>
          </div>
          <div style={{ widows: '20%', marginLeft: '200px' }}>
            <h4>Output:</h4>
            <p style={{ color: 'white' }}>{output1}</p>
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%', marginTop: '40px' }}>
          <textarea
            style={{ width: '50%', height: '300px' }}
          >{`const checkPermutation = (string1: string, string2: string) => {
    // Check if the lengths of the strings are different
    if (string1.length !== string2.length) {
      return false;
    }

    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    // Compare the sorted strings
    return sortedString1 === sortedString2;
  };`}</textarea>
          <div style={{ marginLeft: '20px' }}>
            <h4>Input1:</h4>
            <input type="text" placeholder="string1" onChange={onChangeInput2} />
            <br />
            <h4>Input2:</h4>
            <input type="text" placeholder="string2" onChange={onChangeInput3} />
            <br />
            <br />
            <button type="button" onClick={clickRunSecondFunction}>
              Run
            </button>
          </div>
          <div style={{ widows: '20%', marginLeft: '200px' }}>
            <h4>Output:</h4>
            <p style={{ color: 'white' }}>{output2}</p>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default FunctionPage;

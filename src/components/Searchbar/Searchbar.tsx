import { useState, useEffect, FC } from "react";
// import { client } from "../../api/index";
import axios from 'axios';
import styled from 'styled-components';

const Searchbar: FC = () => {
const [data, setData] = useState<any[]>([])
const [input, setInput] = useState('');
const [output, setOutPut] = useState<any[]>([])

  
/* Funtion for fetch the list data */
async function fetchResults() {
  try {
    const {data} = await axios.get(
      'https://62d7f6869088313935880018.mockapi.io/api/v1/catalogue',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    setData(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    data.filter(val => {
        if(val.brand?.toLowerCase().includes(input.toLowerCase())){
            setOutPut(output => [output, val])
        }
    })
  }, [input])

const Avatar = styled.div`
    > h1 { 
      font-size: ${({ theme }) => theme.font18};
    }

    > input {
        width: 100%;
        height: 50px;
        border: 0.1rem solid ${({ theme }) => theme.primary120};
        border-radius: 5px;
        margin-bottom: 5%;
    }
`;

const Result = styled.div`
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.base10};
    > h6 {
      padding-left: 15px
    }
    > p { 
        font-size: ${({ theme }) => theme.font18};
        padding-left: 15px
    }
`;

const NoRecord = styled.div`
    > span { 
        font-size: ${({ theme }) => theme.font18};
        font-size: 1.8rem;
        background: ${({ theme }) => theme.base10};
        height: 55px;
        border-radius: 5px;
        padding: ${({ theme }) => theme.size16};
        display: flex;
        margin-top: 5%;
        font-weight: bold;
    }
`;

  return (
    <>
    <Avatar>
      <h1>Search</h1>
      <input type="text" onChange={e => setInput(e.target.value)} placeholder="Search" />  

    </Avatar>

      {input.length ? 
        <Result>        
          <h6>Product</h6> 
          {output.map((item, key) => (             
              <p key={key}> {item.brand}</p>                  
          ))}  
        </Result>      
        : 
        <NoRecord>
          <span>No Matches Found</span>
        </NoRecord>
      }
    </>
  );
}

export default Searchbar;
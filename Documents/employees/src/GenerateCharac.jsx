import  React  from  'react';

const  GenerateCharac = ({ selectCharac }) => {
    return (
        <div  className="GenerateCharac">
        <button  onClick={selectCharac}>Get Character</button>
        </div>
    );
};

export  default  GenerateCharac;
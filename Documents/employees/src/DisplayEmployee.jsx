import  React  from  'react';
const  DisplayEmployee = ({ charac }) => {
    return (
        <div  className="DisplayEmployee">
            <img src={charac.image} alt="characimage" />
            <ul>
                <li>Quote: {charac.quote}</li>
                <li>Name: {charac.character}</li>
                <li>CharacterDirection: {charac.characterDirection}</li>
            </ul>
        </div>
    );
};
export  default  DisplayEmployee;
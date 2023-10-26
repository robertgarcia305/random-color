const lennysName = "lenny";
const johnsName = "John";

const displayName = () => {
    console.log("display something");
}

// can only export once, but can add many data types, even functions, as such
module.exports = {lennysName, johnsName, displayName};
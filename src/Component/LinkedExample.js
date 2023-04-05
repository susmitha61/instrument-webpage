import ListGroup from 'react-bootstrap/ListGroup';

function LinkedExample() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="https://en.wikipedia.org/wiki/Guitar">
        Guitar
      </ListGroup.Item>
      <ListGroup.Item action href="https://en.wikipedia.org/wiki/Keyboard_instrument" >
        Keyboard
      </ListGroup.Item>
      <ListGroup.Item action href="https://en.wikipedia.org/wiki/Tabla">
        Tabla
      </ListGroup.Item>
      <ListGroup.Item action href="https://en.wikipedia.org/wiki/Drum">
        Drums
      </ListGroup.Item>
      <ListGroup.Item action href="https://en.wikipedia.org/wiki/Piano">
        Piano
      </ListGroup.Item>
    </ListGroup>
  );
}

export default LinkedExample;
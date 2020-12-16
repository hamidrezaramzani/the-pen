const { Accordion, Card, Button } = require("react-bootstrap");

const NewPostRules = () => (
  <Accordion defaultActiveKey="0" className="new-post-rules">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          1 - Consider these to write the best title for your post
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          Think of your post title as a super short (but compelling!)
          description — like an overview of the actual post in one short
          sentence.
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          2 - You can use these tips to improve the text.
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          Use keywords where appropriate to help ensure people can find your
          post by search.
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default NewPostRules;

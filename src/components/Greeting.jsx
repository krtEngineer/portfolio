const Greeting = ({ greeting }) => {
  return (
    <div className="slide">
      <h1 style={{ fontFamily: `${greeting.font}` }}>{greeting.greeting}</h1>
    </div>
  );
};
export default Greeting;

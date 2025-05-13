export const Person = ({ person }) => (
  <div className="Person">
    <h2 className="Person__name">{person.name}</h2>
    {person.age && <p className="Person__age">Age: {person.age}</p>}
    {person.isMarried ? (
      <p className="Person__partner">
        My {person.gender === 'm' ? 'wife' : 'husband'} is {person.partnerName}.
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </div>
);

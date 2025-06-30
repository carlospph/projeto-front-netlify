
export const Section = ({ children, title, alinhamento, size }) => {
  return (
    <section className="bg-light py-2">
      <div className="container__custom">
        <h3 className={`${alinhamento} ${size}`}>{title}</h3>
        {children}
      </div>
    </section>
  );
};

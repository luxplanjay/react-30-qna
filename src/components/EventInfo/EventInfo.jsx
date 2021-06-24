import css from './EventInfo.module.css';

export const EventInfo = ({ text, children }) => {
  return (
    <p className={css.info}>
      {children} {text}
    </p>
  );
};

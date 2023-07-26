import React from "react";

const Context = () => {
  return (
    <div className="theme">
      <div className="theme__title">Context</div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">
          Контекст позволяет передавать данные через дерево компонентов без
          необходимости передавать пропсы на промежуточных уровнях.
        </p>
        <p className="text__item text__item_padding">
          Контекст разработан для передачи данных, которые можно назвать
          «глобальными» для всего дерева React-компонентов (например, текущий
          аутентифицированный пользователь, UI-тема или выбранный язык).{" "}
        </p>
      </div>
      <div className=" theme__code code">
        <p className="code__title">Создать контекст:</p>
        <pre className="code__item">
          <code>{`const MyContext = React.createContext(defaultValue);`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">
          Создаёт объект Context. Когда React рендерит компонент, который
          подписан на этот объект, React получит текущее значение контекста из
          ближайшего подходящего Provider выше в дереве компонентов.
        </p>
        <p className="text__item text__item_padding">
          Аргумент defaultValue используется только в том случае, если для
          компонента нет подходящего Provider выше в дереве. Значение по
          умолчанию может быть полезно для тестирования компонентов в изоляции
          без необходимости оборачивать их.{" "}
        </p>
      </div>
      <div className=" theme__code code">
        <p className="code__title">
          Каждый объект Context используется вместе с Provider компонентом,
          который позволяет дочерним компонентам, использующим этот контекст,
          подписаться на его изменения.
        </p>
        <pre className="code__item">
          <code>{`<MyContext.Provider value={value}> </MyContext.Provider>`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">
          Компонент Provider принимает проп value, который будет передан во все
          компоненты, использующие этот контекст и являющиеся потомками этого
          компонента Provider. Один Provider может быть связан с несколькими
          компонентами, потребляющими контекст. Так же компоненты Provider могут
          быть вложены друг в друга, переопределяя значение контекста глубже в
          дереве.
        </p>
        <p className="text__item text__item_padding">
          Все потребители, которые являются потомками Provider, будут повторно
          рендериться, как только проп value у Provider изменится. Потребитель
          (включая .contextType и useContext) перерендерится при изменении
          контекста, даже если его родитель, не использующий данный контекст,
          блокирует повторные рендеры с помощью shouldComponentUpdate.
        </p>
      </div>
      <div className=" theme__code code">
        <p className="code__title">
          Consumer — это React-компонент, который подписывается на изменения
          контекста. В свою очередь, использование этого компонента позволяет
          вам подписаться на контекст в функциональном компоненте.
        </p>
        <pre className="code__item">
          <code>{`<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">
          Consumer принимает функцию в качестве дочернего компонента. Эта
          функция принимает текущее значение контекста и возвращает
          React-компонент. Передаваемый аргумент value будет равен ближайшему
          (вверх по дереву) значению этого контекста, а именно пропу value
          компонента Provider. Если такого компонента Provider не существует,
          аргумент value будет равен значению defaultValue, которое было
          передано в createContext().
        </p>
      </div>
      <div className=" theme__code code">
        <p className="code__title">
          Хук useContext. Принимает один параметр - это объект контекста,
          получаемый при вызове React.createContext и возвращает текущее
          значение контекста для этого контекста.
        </p>
        <pre className="code__item">
          <code>{`const value = useContext(MyContext);`}</code>
        </pre>
      </div>
      <div className="theme__text text">
        <p className="text__item text__item_padding">
          Когда ближайший {`<MyContext.Provider>`} над компонентом обновляется,
          этот хук вызовет повторный рендер с последним значением контекста,
          переданным этому провайдеру MyContext. Даже если родительский
          компонент использует React.memo или реализует shouldComponentUpdate,
          то повторный рендер будет выполняться, начиная c компонента,
          использующего useContext.
        </p>
        <p className="text__item text__item_padding">
          Аргументом для useContext должен быть непосредственно сам объект
          контекста.
        </p>
        <p className="text__item text__item_padding">
          Контекст лучше всего создавать в отдельном файле.{" "}
        </p>
      </div>
    </div>
  );
};

export default Context;

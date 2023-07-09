import React from 'react'

const Fragment = () => {
    return (
        <div className='theme'>
            <div className='theme__title'>Фрагмент</div>
            <div className='theme__text text'>
                <p className='text__item'>Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.</p>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</p>
                <pre className='code__item'>
                    <code>{`import { Fragment } from 'react';`}
                    </code>
                </pre>
            </div>

            <div className=' theme__code code code'>
                <p className='code__title'>Заменяем теги div на Fragment:</p>
                <pre className='code__item'>
                    <code>{`render() {
  return (
    <Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </Fragment>
  );
}`}
                    </code>
                </pre>
            </div>
            <div className=' theme__code code code'>
                <p className='code__title'>Существует сокращенная запись (импортировать не нужно):</p>
                <pre className='code__item'>
                    <code>{`render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}`}
                    </code>
                </pre>
            </div>
            <div className='theme__text text'>
                <p className='text__item'>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
            </div>
        </div>

    )
}

export default Fragment;
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/react';
import { emotion, esbuild, react, typescript } from './assets';
import { Error, Image } from './components';

const Title = lazy(() => import('./components/Title'));

ReactDOM.render(
  <Error>
    <Suspense fallback="Loading">
      <Global
        styles={css`
          body {
            font-family: Helvetica;
          }
        `}
      />
      <Title title="This app is entirely built with ESBUILD" />
      <Image src={esbuild} alt="esbuild" />
      &nbsp;
      <Image src={react} alt="esbuild" />
      &nbsp;
      <Image src={emotion} alt="esbuild" />
      &nbsp;
      <Image src={typescript} alt="esbuild" />
      &nbsp;
      <Title title="Libraries" />
      <ul>
        <li>React</li>
        <li>Emotion</li>
        <li>Typescript</li>
      </ul>
      <Title title="Features" />
      <ul>
        <li>Watch mode for development</li>
        <li>Code splitting/lazy loading</li>
        <li>Assets handled with specific loaders</li>
        <li>Minifying</li>
        <li>Source maps</li>
      </ul>
    </Suspense>
  </Error>,
  document.getElementById('root'),
);

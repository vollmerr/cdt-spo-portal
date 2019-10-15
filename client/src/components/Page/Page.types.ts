import React from 'react';
import { ITheme, IStyleFunctionOrObject, IStyle } from 'office-ui-fabric-react';

export interface IPageProps {
  /** Content to render */
  children: React.ReactNode;
  /** Title to render for page */
  title?: string;
  /** Call to provide customized styling that will layer on top of the variant rules. */
  styles?: IStyleFunctionOrObject<IPageStyleProps, IPageStyles>;
  /** Theme provided by HOC. */
  theme?: ITheme;
}

export interface IPageStyleProps {
  className?: string;
  centered?: boolean;
  theme: ITheme;
}

export interface IPageStyles {
  /** Style for the root element (a div) */
  root?: IStyle;
  /** Style for the container wrapping the title and content */
  container?: IStyle;
  /** Style for the content within the page */
  content?: IStyle;
}

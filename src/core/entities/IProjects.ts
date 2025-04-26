export interface IProject {
  img: string;
  name: string;
  tecnologies: Array<string>;
  link: ILink;
}

export interface ILink {
    gitFront?: string;
    gitBack?: string;
    url?: string;
}
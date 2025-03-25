export interface IProject {
  img: string;
  name: string;
  tecnologies: Array<string>;
  link: ILink;
}

export interface ILink {
    github: string;
    url: string;
}
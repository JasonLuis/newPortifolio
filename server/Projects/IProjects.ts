export interface IProject {
  img: string;
  name: string;
  tecnologies: Array<string>;
  links: Array<ILink>;
}

export interface ILink {
    github: string;
    url: string;
}
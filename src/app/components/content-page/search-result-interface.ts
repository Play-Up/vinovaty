import {SocialNetwork} from "./social-network-interface";

export interface SearchResult {
  fullName: string,
  surname: string,
  position: string,
  organization: string,
  role: string,
  photo: string,
  tags: string[],
  socialNetworks: SocialNetwork[],
  region: string,
  phone: string,
  phoneType: string
}

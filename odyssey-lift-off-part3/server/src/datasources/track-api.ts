import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel, ModuleModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}

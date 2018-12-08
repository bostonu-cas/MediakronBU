import Model from "~/core-js/extensions/models";
import { base_path, uri } from "../../../util/url"

class Site extends Model {
  constructor() {
      super()
      this.id = 0;
      this.urlRoot = function(){
          return base_path() + '/api/' + uri()
      }
  }

  /**
   * Pass the site object to the settings
   * to initialize the settings
   */
  initializeSettings(){
    Mediakron.Settings.site(this);
  }
}
export default Site;
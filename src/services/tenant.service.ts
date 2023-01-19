import { injectable } from "inversify";

@injectable()
export class TenantService {
  constructor() {
    console.log("Tenant Service");
  }

  async all() {
    return {
      id: 5,
      name: "Harun Soykok"
    };
  }
}

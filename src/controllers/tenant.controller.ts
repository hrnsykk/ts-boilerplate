import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { Authorization } from "../middlewares/authorization.middleware";
import { TenantService } from "../services/tenant.service";

@controller("/tenant")
export class TenantController {
  constructor(private readonly _service: TenantService) {}

  @httpGet("/", Authorization)
  async read(req: Request, res: Response) {
    let data = await this._service.all();
    res.status(200).json(data);
  }

  @httpPost("/")
  async create(req: Request, res: Response) {
    res.status(200).json({});
  }
}

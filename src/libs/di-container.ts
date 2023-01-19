import { Container } from "inversify";
import { TenantService } from "../services/tenant.service";

export const container = new Container();
container.bind(TenantService).toSelf();

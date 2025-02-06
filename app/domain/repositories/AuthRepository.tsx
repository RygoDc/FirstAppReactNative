import { ApiDeliveryResponse } from "../../data/sources/remote/models/ResponseApiDelivery";
import { UserInterface, UserLoginInterface} from "../entities/User";

export interface AuthRepository {
    register: (user: UserInterface) => Promise<ApiDeliveryResponse>;
    login: (user: UserLoginInterface) => Promise<ApiDeliveryResponse>;
}
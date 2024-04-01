import PageContainer from "../pageContainer";
import { ItemService } from "./elements/itemService";
import "./services.scss";

export function Services() {
  return (
    <div className="custom-bg">
      <PageContainer>
        <div className="grid grid-cols-1 px-6">
          <div className="text-4xl font-bold text-center text-white py-10 md:pt-20 md:pb-10">
            We specialize in the following services
          </div>
          <ItemService />
        </div>
      </PageContainer>
    </div>
  );
}

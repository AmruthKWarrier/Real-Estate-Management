import { propertyData } from "@/propertyData";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = propertyData.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">Property not found</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={`https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600`}
            alt={property.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <p className="text-gray-600 mb-4">{property.address}</p>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            ${property.price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Type</p>
              <p>{property.type}</p>
            </div>
            <div>
              <p className="font-semibold">Bedrooms</p>
              <p>{property.bedrooms}</p>
            </div>
            <div>
              <p className="font-semibold">Bathrooms</p>
              <p>{property.bathrooms}</p>
            </div>
            <div>
              <p className="font-semibold">Area</p>
              <p>{property.area} sq ft</p>
            </div>
          </div>
          <Button className="w-full">Contact Agent</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

import { agentData } from "@/agentData";

const AgentsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">Our Agents</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {agentData.map((agent) => (
        <div
          key={agent.id}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <img
            src={`https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt={agent.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
          <p className="text-gray-600 mb-2">{agent.title}</p>
          <p className="text-blue-600 mb-1">{agent.phone}</p>
          <p className="text-blue-600">{agent.email}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AgentsPage;

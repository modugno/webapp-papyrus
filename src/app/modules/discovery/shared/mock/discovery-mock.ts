import { Discovery } from "../interface/discovery";
import { ResponseWrapper } from 'src/app/shared/interface/response-wrapper';

let discoveriesDataMock: Discovery[] = [];
for (let i = 0; i < 5; i++) {
  discoveriesDataMock.push({
    _id: Math.random().toString(36).substring(7),
    title: 'Pirâmides do Egito',
    description: 'Visitando as Pirâmides',
    date: new Date
  });
}

const responseMultiDiscoveries = (): ResponseWrapper<Discovery[]> => (
  {
    result: [ ...discoveriesDataMock ],
    status: 200
  }
);

const _discovery: Discovery = responseMultiDiscoveries().result[0];

const responseSingleDiscovery = (discovery): ResponseWrapper<Discovery> => {
  return {
    result: discovery,
    status: 200
  }
}

export {
    responseMultiDiscoveries,
    _discovery,
    responseSingleDiscovery
}
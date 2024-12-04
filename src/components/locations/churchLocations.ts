export interface LocationType {
  name: string;
  address: string;
}

const churchLocations: LocationType[] = [
  {
    name: 'HEADQUARTERS',
    address: 'Opposite Police College, Along Achi Road, Oji River Enugu State',
  },
  {
    name: 'ACHI BRANCH',
    address: 'Obinaetiti Isikwe Achi in Oji River Enugu State',
  },
  {
    name: 'NSUKKA BRANCH',
    address: 'Aku Nsukka, Ofia enyi',
  },
  {
    name: 'UGWUOBA BRANCH',
    address: 'Opposite St.Stephen Anglican Church Agwungwu',
  },
  {
    name: 'NGWO BRANCH',
    address: 'Ukaka Ngwo',
  },
  {
    name: 'ADU BRANCH',
    address: 'Obu Oboshi Hall, Adu Achi',
  },
];

export default churchLocations;

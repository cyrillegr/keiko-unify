import * as React from 'react';
import withDataFetching from 'HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';
import Pokemon, { Props } from './Pokemon';

export default withDataFetching<Props>(
  'pokemon',
  (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
  (props: Props) => [],
)(Pokemon);
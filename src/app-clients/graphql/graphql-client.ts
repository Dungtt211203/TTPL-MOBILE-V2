import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { errorLink } from '@app-clients/server/config-rest-link';
import { RestLink } from 'apollo-link-rest';
import ApolloLinkTimeout from 'apollo-link-timeout';

const cache = new InMemoryCache({
   
});

const customLink = new ApolloLink((operation, forward) => {
    // Ở đây bạn có thể thêm xác thực hoặc thực hiện bất kỳ tùy chỉnh nào bạn muốn
    // Ví dụ: thêm header Authorization
    operation.setContext({
      headers: {
        // Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      },
    });
    return forward(operation);
  });
  
  // Tạo một HTTP Link cho URL GraphQL của bạn
  const httpLink = createHttpLink({
    uri: 'https://ngantuanphat.vugiasoftware.com/graphql',
    credentials: 'include', // Hoặc 'include' nếu cần truyền cookie
  });
  
  // Tạo một chuỗi liên kết Apollo bằng cách sử dụng ApolloLink.from
  const link = ApolloLink.from([customLink, httpLink]);
  
  // Tạo Apollo Client với chuỗi liên kết đã tạo và bộ nhớ đệm InMemoryCache
  const GraphqlClient = new ApolloClient({
    link: link,
    cache: cache,
  });

export default GraphqlClient;

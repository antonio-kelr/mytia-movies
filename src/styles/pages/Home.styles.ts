import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 100px;
  
  @media (max-width: 960px) {
    margin-top: 135px;
  }
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

export const Section = styled.section`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #f5c518;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  .p-paginator {
    background: transparent;
    border: none;
    padding: 0;
  }

  .p-paginator .p-paginator-pages .p-paginator-page {
    min-width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.2rem;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #007bff;
    color: white;
  }

  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: #f8f9fa;
  }

  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    min-width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.2rem;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .p-paginator .p-paginator-first:not(.p-disabled):hover,
  .p-paginator .p-paginator-prev:not(.p-disabled):hover,
  .p-paginator .p-paginator-next:not(.p-disabled):hover,
  .p-paginator .p-paginator-last:not(.p-disabled):hover {
    background: #f8f9fa;
  }

  .p-paginator .p-paginator-first.p-disabled,
  .p-paginator .p-paginator-prev.p-disabled,
  .p-paginator .p-paginator-next.p-disabled,
  .p-paginator .p-paginator-last.p-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    .p-paginator {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }

    .p-paginator .p-paginator-pages .p-paginator-page {
      min-width: 2rem;
      height: 2rem;
      margin: 0 0.1rem;
      font-size: 0.875rem;
    }

    .p-paginator .p-paginator-first,
    .p-paginator .p-paginator-prev,
    .p-paginator .p-paginator-next,
    .p-paginator .p-paginator-last {
      min-width: 2rem;
      height: 2rem;
      margin: 0 0.1rem;
    }

    .p-paginator .p-paginator-pages {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }
  }

  @media (max-width: 480px) {
    .p-paginator .p-paginator-pages .p-paginator-page {
      min-width: 1.75rem;
      height: 1.75rem;
      font-size: 0.75rem;
    }

    .p-paginator .p-paginator-first,
    .p-paginator .p-paginator-prev,
    .p-paginator .p-paginator-next,
    .p-paginator .p-paginator-last {
      min-width: 1.75rem;
      height: 1.75rem;
    }
  }
`;
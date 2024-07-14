import { ItemShape } from './Item';

export const Shapes = () => (
  <div className="w-4/5 flex flex-row justify-around max-md:gap-10 ">
    <ItemShape.Root>
      <ItemShape.Title>1000+</ItemShape.Title>
      <ItemShape.Subtitle>Redações corrigidas</ItemShape.Subtitle>
      <ItemShape.Background className="bg-neutrals-500" />
    </ItemShape.Root>
    <ItemShape.Root>
      <ItemShape.Title>100%</ItemShape.Title>
      <ItemShape.Subtitle>Alunos satisfeitos</ItemShape.Subtitle>
      <ItemShape.Background className="rounded-full border-[10px] border-neutrals-500" />
    </ItemShape.Root>
    <ItemShape.Root>
      <ItemShape.Title>24h</ItemShape.Title>
      <ItemShape.Subtitle>Sistema disponível</ItemShape.Subtitle>
      <ItemShape.Background className="rounded-full bg-neutrals-500" />
    </ItemShape.Root>
  </div>
);

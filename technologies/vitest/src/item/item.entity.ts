import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core'
import { BaseEntity } from '../shared/baseEntity.entity.js'
import { Character } from '../character/character.entity.js'

@Entity()
export class Item extends BaseEntity {
  @Property({ nullable: false, unique: true })
  name!: string

  @Property()
  description!: string

  @ManyToMany(() => Character, (character) => character.items)
  characters = new Collection<Character>(this)
}